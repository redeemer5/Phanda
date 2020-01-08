package com.Phanda.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Phanda.model.userModel;
import com.Phanda.model.userOrderModel;

@Repository
public interface userOrderRepo extends JpaRepository<userOrderModel,Integer> {

}
