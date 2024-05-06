<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GalleryController;
Route::get('/', function () {
    return view('welcome');
});


Route::controller(GalleryController::class)->group(function () {
    Route::get('/gallery','index');

});