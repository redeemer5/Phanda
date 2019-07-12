package com.Phanda.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Phanda.Repo.cartRepo;
import com.Phanda.model.cartModel;


@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class cartController {
	
	
	@Autowired
	private cartRepo cart;
	
	// get menu 
	@GetMapping("/getMenu")
	public List<cartModel> getMenu()
	{
		return cart.findAll();
	}

}
