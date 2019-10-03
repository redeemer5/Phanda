package com.Phanda.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Phanda.model.restaurantModel;


@Repository
public interface restaurantsRepo extends JpaRepository<restaurantModel,Integer>{
	
	List<restaurantModel> findBysid (int id);

}
