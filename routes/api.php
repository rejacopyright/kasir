<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('barang/select2', 'api_c@barang_select2');
Route::get('barang/multi', 'api_c@barang_multi');
Route::get('barang/detail/{id}', 'api_c@barang_detail');
Route::post('transaksi/add', 'api_c@transaksi_add');
Route::get('transaksi_by_id/{id}', 'api_c@transaksi_by_id');
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
