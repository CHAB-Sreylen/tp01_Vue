<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class crud_todo_task extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_create_task()
    {
        $response = $this->get('http://127.0.0.1:8000/tasks/create');

        $response->assertStatus(200);
    }
}
