<a href="#" data-toggle="modal" data-target="#transaksi_add" class="btn btn-primary btn-icon-split btn-sm float-right">
  <span class="icon text-white-50"> <i class="fas fa-plus"></i> </span>
  <span class="text">Tambah Transaksi</span>
</a>

<!-- MODAL -->
<div class="modal fade" id="transaksi_add" role="dialog" aria-labelledby="transaksi_add_title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <form class="" action="index.html" method="post">
        <div class="modal-header">
          <h5 class="text-primary" id="transaksi_add_title">Tambah Transaksi</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
        </div>
        <div class="modal-body">
          <div class="row align-items-end">
            <div class="col">
              <small class="text-primary p-1">Pilih Barang</small>
              <select name="barang">
              </select>
            </div>
            <div class="col">
              <small class="text-primary p-1">Jumlah</small>
              <input type="text" class="form-control" name="qty" data-v-min="1" data-m-Dec="0" data-a-Sep="." data-a-Dec="," value="1">
            </div>
            <div class="col-auto">
              <button class="btn btn-block btn-success" type="button" id="add_list_btn" disabled>Tambahkan</button>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="mt-4 mb-0">
                <h6 class="text-primary font-weight-bold float-left">Daftar Transaksi</h6>
                <div class="float-right">
                  Total :
                  <h4 class="text-danger font-weight-bold mb-1 d-inline ml-2" id="total_harga">0</h4>
                  <input type="hidden" name="total_harga" value="">
                </div>
              </div>
              <div class="table-responsive mh-50">
                <table class="table table-striped" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>No. </th>
                      <th>Nama Barang</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                      <th>Subtotal</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody id="tabel_transaksi">
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-light" type="button" data-dismiss="modal">Cancel</button>
          <button class="btn btn-primary" type="button" id="submit" disabled>Tambah</button>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- CSS -->
<link href="{{url('public/select2/css/select2.css')}}" rel="stylesheet" />
<!-- JS -->
<script src="{{url('public/select2/js/select2.full.js')}}"></script>
<script src="{{url('public')}}/js/autonumeric.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $('input[name="qty"]').autoNumeric();
    $("select[name='barang']").select2({
      width: '100%',
      'placeholder': 'Pilih Barang',
      ajax: {
        url: "{{url('api/barang/select2')}}",
        dataType: 'json',
        processResults: function (data, params) {
          params.page = params.page || 1;
          return {
            results: data,
            "pagination": {
              more: (params.page) < (data.length + 1)
            }
          };
        },
        cache: false
      }
    });
  });
  $(document).on('keyup change', 'select[name="barang"], input[name="qty"]', function(e) {
    var barang = $('select[name="barang"]').val();
    var qty = parseInt($('input[name="qty"]').val().toString().split('.').join(''));
    if (barang !== null & qty > 0) {
      $('#add_list_btn').prop('disabled', false);
    }else {
      $('#add_list_btn').prop('disabled', true);
    }
  });
  $(document).on('click', '#add_list_btn', function(e) {
    e.preventDefault();
    var val = $('select[name="barang"]').val();
    $.ajax({ url: "{{url('api/barang/detail')}}/" + val, type: 'GET' }).done(function(data) {
      var qty = parseInt($('input[name="qty"]').val().toString().split('.').join(''));
      var total_harga = parseInt($('input[name="total_harga"]').val() || 0) + (data.harga_satuan * qty);
      $('input[name="total_harga"]').val(total_harga);
      $('#total_harga').text('Rp. ' + rp(total_harga));
      var tr = '<tr>'+
        '<td class="nomor"></td>'+
        '<td class="text-capitalize"><input type="hidden" name="master_barang_id[]" value="'+data.id+'">'+data.nama_barang+'</td>'+
        '<td><input type="hidden" name="harga_satuan[]" value="'+(data.harga_satuan)+'"> Rp. '+ rp(data.harga_satuan)+'</td>'+
        '<td><input type="hidden" name="jumlah[]" value="'+qty+'">'+ rp(qty)+'</td>'+
        '<td><input type="hidden" name="subtotal[]" value="'+(data.harga_satuan * qty)+'"> Rp. '+ rp(data.harga_satuan * qty)+'</td>'+
        '<td><a href="#" class="btn btn-outline-danger btn-circle btn-sm remove_btn"><i class="fas fa-times"></i></a></td>'+
      '</tr>';
      $("#tabel_transaksi").append(tr);
      $('#submit').prop('disabled', false);
    });
  });
  $(document).on('click', '.remove_btn', function(e) {
    e.preventDefault();
    var tr = $(this).closest('tr');
    var subtotal = parseInt(tr.find('input[name="subtotal[]"]').val());
    var total = $('input[name="total_harga"]').val() - subtotal;
    $('input[name="total_harga"]').val(total)
    $('#total_harga').text('Rp. ' + rp(total));
    tr.remove();
    if ($("#tabel_transaksi tr").length === 0) {
      $('#submit').prop('disabled', true);
    }
  });
  $(document).on('click', '#submit', function(e) {
    e.preventDefault();
    var q = {};
    q['_token'] = '{{ csrf_token() }}';
    q['total_harga'] = $('input[name="total_harga"]').val();

    var transaksi = [];
    for (var i = 0; i < $("#tabel_transaksi tr").length; i++) {
      var master_barang_id = $('input[name="master_barang_id[]"]')[i].value;
      var jumlah = $('input[name="jumlah[]"]')[i].value;
      var harga_satuan = $('input[name="harga_satuan[]"]')[i].value;
      transaksi.push({
        master_barang_id: master_barang_id,
        jumlah: jumlah,
        harga_satuan: harga_satuan
      });
    }

    q['transaksi'] = transaksi;
    $.ajax({ url: '{{url("api/transaksi/add")}}', type: 'POST', data: q }).done(function(data) {
      $.get('{{url("transaksi")}}', function(data){
        var html = $($.parseHTML(data));
        var item = html.find("#product-list").html();
        $("#product-list").html(item);
      });
      $('#transaksi_add').modal('toggle');
    });
  });
</script>
