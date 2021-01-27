@extends('layouts.master')
@section('konten')
<div class="card shadow mb-3">
  <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">Master Barang</h6>
  </div>
  <div class="card-body">
    <div class="table-responsive">
      <table class="table table-striped" width="100%" cellspacing="0">
        <thead>
          <tr>
            <th>No. </th>
            <th>Nama Barang</th>
            <th>Harga Satuan</th>
          </tr>
        </thead>
        <tbody>
          @php $n = 1; @endphp
          <?php foreach ($barang as $b): ?>
            <tr>
              <td>{{$n++}}</td>
              <td>{{$b->nama_barang}}</td>
              <td>Rp. {{number_format($b->harga_satuan,0,',','.')}}</td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
</div>
@endsection
