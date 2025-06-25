<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shelter extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'type', 'description', 'address',
        'city', 'county', 'phone', 'latitude', 'longitude',
        'requirements'
    ];
}
