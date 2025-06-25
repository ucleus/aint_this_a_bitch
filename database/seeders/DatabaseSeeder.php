<?php
namespace Database\Seeders;

use Database\Seeders\ShelterSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            ShelterSeeder::class,
        ]);
    }
}
