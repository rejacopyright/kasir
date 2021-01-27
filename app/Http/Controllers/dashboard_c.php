<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\master_barang as barang;

class dashboard_c extends Controller
{
  function index(){
    $barang = barang::get();
    return view('dashboard', compact('barang'));
  }
}
