package com.Phanda.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Phanda.model.destination;

@Repository
public interface destinationRepo extends JpaRepository<destination,Integer> {

}
