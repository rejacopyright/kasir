<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\master_barang as barang;
use App\Models\transaksi_pembelian_barang as detail;
use App\Models\transaksi_pembelian as transaksi;

class transaksi_c extends Controller
{
  function index(){
    $transaksi = transaksi::orderByDesc('created_at')->paginate(5);
    return view('transaksi', compact('transaksi'));
  }
}
