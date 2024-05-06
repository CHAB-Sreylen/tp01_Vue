<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
class GalleryController extends Controller
{
    public function index (){
        
        $url = Storage::disk('minio')->url('Gradle87.png');
        dd($url);
        return view('gallery',compact("url"));
    }
}
