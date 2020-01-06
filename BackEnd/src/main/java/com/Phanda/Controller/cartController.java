package com.Phanda.Controller;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.bind.annotation.RequestBody;

import com.Phanda.Repo.cartRepo;
import com.Phanda.Repo.destinationRepo;
import com.Phanda.Repo.restaurantsRepo;
import com.Phanda.Repo.stopsRepo;
import com.Phanda.Repo.userRepo;
import com.Phanda.model.cartModel;
import com.Phanda.model.destination;
import com.Phanda.model.restaurantModel;
import com.Phanda.model.stopsModel;
import com.Phanda.model.userModel;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class cartController {
	
	
	@Autowired
	private cartRepo cart;
	
	@Autowired
	private stopsRepo sRepo;
	
	@Autowired
	private destinationRepo dRepo;
	
	
	@Autowired
	private restaurantsRepo resRepo;
	
	@Autowired
	private userRepo userR;
	
	// get menu 
	@GetMapping("/getMenu/{resid}")
	public List<cartModel> getMenu(@PathVariable int resid)
	{
		return cart.findByresid(resid);
	}
	
	// get stops based on the destination selected
	@GetMapping("/stop/{des}")
	public List<stopsModel> getStop(@PathVariable int des)
	{
		return sRepo.findBydid(des);
	}
	
	// get all travel destinations e.g plk - pta
	@GetMapping("/getTrip")
	public List<destination> getTrip()
	{
		return dRepo.findAll();
	}
	
	//get all restaurants based on the stop selected
	@GetMapping("/res/{sid}")
	public List<restaurantModel> getRestaurants(@PathVariable int sid)
	{
		return resRepo.findBysid(sid);
	}
	
	// this method creates a new user into the database
	@PostMapping("/addUser")
		public ResponseEntity<Object> createUser(@Valid @RequestBody userModel user) 
	{
				userModel userModel = userR.save(user);
		
				URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{uid}")
						.buildAndExpand(userModel.getUid()).toUri();
		
				return ResponseEntity.created(location).build();	
	}

	// this methods gets user data bases on their name and email
	@GetMapping("/getUserDetails/{name}/{email}")
	public List<userModel> getUserDetails(@PathVariable String name,@PathVariable String email)
	{
		return userR.findByNameAndEmail(name, email);
	}
	
	//this method gets user by name
	@GetMapping("/getUserName/{name}")
	public List<userModel> getUserName(@PathVariable String name)
	{
		return userR.findByName(name);
	}
	
	
}
