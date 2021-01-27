<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\master_barang as barang;
use App\Models\transaksi_pembelian_barang as detail;
use App\Models\transaksi_pembelian as transaksi;

class api_c extends Controller
{
  function barang_select2(Request $data){
    $barang = barang::where('nama_barang', 'like', '%'.$data->q.'%')->paginate(10);
    $map = ($barang)->map(function($item){
      return ['id' => $item['id'], 'text' => ucwords($item['nama_barang'])];
    });
    return $map;
  }
  function barang_multi(Request $data){
    $barang = barang::whereIn('id', $data->id)->get()->all();
    return $barang;
  }
  function barang_detail(Request $data, $id){
    $barang = barang::where('id', $id)->first();
    return $barang;
  }
  function transaksi_add(Request $data){
    $transaksi_pembelian_id = transaksi::max('id')+1;
    for ($i=0; $i < count($data->transaksi); $i++) {
      $t = new detail;
      $t->transaksi_pembelian_id = $transaksi_pembelian_id;
      $t->master_barang_id = $data->transaksi[$i]['master_barang_id'];
      $t->jumlah = $data->transaksi[$i]['jumlah'];
      $t->harga_satuan = $data->transaksi[$i]['harga_satuan'];
      $t->save();
    }
    $ts = new transaksi;
    $ts->id = $transaksi_pembelian_id;
    $ts->total_harga = $data->total_harga;
    $ts->save();

    return $data->transaksi;
  }
  function transaksi_by_id($id){
    $detail = detail::where('transaksi_pembelian_id', $id)->get();
    $detail = $detail->map(function($i){
      $i->barang;
      return $i;
    })->toArray();
    $transaksi = transaksi::where('id', $id)->first();
    return compact('detail', 'transaksi');
  }
}
