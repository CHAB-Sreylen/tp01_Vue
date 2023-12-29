<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/categories',function(Request $request){
        return "Get all categories";
});
Route::post('/categories',function(Request $request){
    return 'Create 1 category';
});
Route::patch('/categories/{categoyId}',function(Request $request){
    return 'Update 1 categoy';
});
Route::patch('/categories/{categoyId}',function(Request $request){
    return "Delete 1 category";
});