<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Shelter;

class ShelterSeeder extends Seeder
{
    public function run(): void
    {
        Shelter::create([
            'name' => 'Central Park Shelter',
            'type' => 'public',
            'description' => 'Main municipal shelter.',
            'address' => '123 Main St',
            'city' => 'Fort Lauderdale',
            'county' => 'Broward',
            'phone' => '555-1234',
            'latitude' => 26.1224,
            'longitude' => -80.1373,
            'requirements' => 'ID required',
        ]);
    }
}
