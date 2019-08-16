package com.Phanda.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Phanda.model.stopsModel;

@Repository
public interface stopsRepo extends JpaRepository<stopsModel,Integer> {
	
	List<stopsModel> findBydes(int id);
	
}
