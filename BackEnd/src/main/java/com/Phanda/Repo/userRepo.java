package com.Phanda.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Phanda.model.userModel;

@Repository
public interface userRepo extends JpaRepository<userModel,Integer> {

	List<userModel> findByNameAndEmail(String name,String email);
	List<userModel> findByName(String name);

}
