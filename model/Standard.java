package io.chronos.entity;

import io.tesler.model.core.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Standard extends BaseEntity {
	private String name;
}
