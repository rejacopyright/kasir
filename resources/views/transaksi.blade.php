@extends('layouts.master')
@section('konten')
<?php use Carbon\Carbon; ?>
<style media="all">
  .table{ counter-reset: nomor; }
  .nomor:before { content: counter(nomor); counter-increment: nomor; }
</style>
<div class="card shadow mb-3">
  <div class="card-header py-3">
    <h6 class="m-0 font-weight-bold text-primary float-left">Master Barang</h6>
    @include('transaksi_add')
  </div>
  <div class="card-body" id="product-list">
    <div class="table-responsive">
      <table class="table table-striped" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>No. </th>
            <th>ID Transaksi</th>
            <th>Total</th>
            <th>Date</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          @php $n = 1; @endphp
          <?php foreach ($transaksi as $t): ?>
            <tr>
              <td>{{$n++}}</td>
              <td>{{str_pad($t->id,5,"0",STR_PAD_LEFT)}}</td>
              <td>Rp. {{number_format($t->total_harga,0,',','.')}}</td>
              <td>{{Carbon::parse($t->created_at)->format('D, d M Y : H:i')}}</td>
              <td><a class="btn btn-xs btn-outline-primary py-1 font-12 font-weight-bold" onclick="detail({{$t->id}})" data-toggle="modal" data-target="#transaksi_detail">Detail</a></td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
      <div class="d-flex">
        <div class="col-auto mx-auto">
          {{ $transaksi->links() }}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- MODAL DETAIL -->
<div class="modal fade" id="transaksi_detail" role="dialog" aria-labelledby="transaksi_add_title" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <form class="" action="index.html" method="post">
        <div class="modal-header">
          <h5 class="text-primary" id="transaksi_detail_title">Detail Transaksi</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col">
              <div class="mt-4 mb-0">
                <h6 class="text-primary font-weight-bold float-left">Transaksi ID <strong id="transaksi_id"></strong></h6>
                <div class="float-right">
                  Total :
                  <h4 class="text-danger font-weight-bold mb-1 d-inline ml-2" id="total_harga_transaksi">0</h4>
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
                    </tr>
                  </thead>
                  <tbody id="tabel_transaksi_detail">
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-light" type="button" data-dismiss="modal">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</div>

<script type="text/javascript">
  function rp(int){ return int.toString().replace(/(\d)(?=(\d{3})+(?:\,\d+)?$)/g, "$1."); }
  $(document).on('click', '#product-list li.page-item:not(".disabled")', function(event) {
    event.preventDefault();
    var url = $(this).find("a:first").attr("href");
    window.history.replaceState({},"",url);
    $.get(url, function(data){
      var html = $($.parseHTML(data));
      var item = html.find("#product-list").html();
      $("#product-list").html(item);
    });
  });

  function detail(id){
    $.ajax({ url: '{{url("api/transaksi_by_id")}}/' + id, type: 'GET' }).done(function(data) {
      var tr = '';
      for (var r of data.detail) {
        tr = tr +
        '<tr>' +
        '<td class="nomor"></td>' +
        '<td class="text-capitalize">'+ r.barang.nama_barang +'</td>' +
        '<td>Rp. '+ rp(r.harga_satuan) +'</td>' +
        '<td>'+ rp(r.jumlah) +'</td>' +
        '<td>Rp. '+ rp(r.harga_satuan * r.jumlah) +'</td>' +
        '</tr>';
      }
      $("#transaksi_id").text(data.transaksi.id.toString().padStart(5,'0'));
      $("#total_harga_transaksi").text('Rp. ' + rp(data.transaksi.total_harga));
      $("#tabel_transaksi_detail").html(tr);
    });
  }
</script>
@endsection
