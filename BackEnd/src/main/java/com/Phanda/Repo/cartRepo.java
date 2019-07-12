package com.Phanda.Repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Phanda.model.cartModel;

@Repository
public interface cartRepo extends JpaRepository<cartModel,Integer> {
	
}
