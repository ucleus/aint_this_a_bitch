<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShelterController;

Route::get('/shelters', [ShelterController::class, 'index'])->middleware('throttle:60,1');
