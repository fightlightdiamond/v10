<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Repositories\GuildMatchRepository;
use App\Entities\GuildMatch;
use App\Validators\GuildMatchValidator;

/**
 * Class GuildMatchRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class GuildMatchRepositoryEloquent extends BaseRepository implements GuildMatchRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return GuildMatch::class;
    }

    

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }
    
}
