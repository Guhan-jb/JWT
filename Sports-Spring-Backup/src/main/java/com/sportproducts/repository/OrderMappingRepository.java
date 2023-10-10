package com.sportproducts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sportproducts.model.OrderMapping;



public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}
