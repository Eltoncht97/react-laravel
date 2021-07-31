<?php

use App\Http\Controllers\Api\V1\UserController;
use App\Http\Controllers\NoteController;
use Illuminate\Support\Facades\Route;

Route::group([
    'middleware' => 'api',
    'prefix' => 'v1/auth'

], function ($router) {
    Route::post('login', [\App\Http\Controllers\Api\V1\AuthController::class, 'login'])->name('login');
    Route::post('logout', [\App\Http\Controllers\Api\V1\AuthController::class, 'logout'])->name('logout');
    Route::post('refresh', [\App\Http\Controllers\Api\V1\AuthController::class, 'refresh'])->name('refresh');
    Route::post('me', [\App\Http\Controllers\Api\V1\AuthController::class, 'me'])->name('me');
});

Route::group([
    'middleware' => 'api'
], function ($router) {
    Route::resource('user', UserController::class);
    Route::resource('notes', NoteController::class);
});
