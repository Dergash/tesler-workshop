package io.chronos.dto;

import io.chronos.entity.Standard;
import io.tesler.api.data.dto.DataResponseDTO;
import io.tesler.core.util.filter.SearchParameter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
public class StandardDto extends DataResponseDTO {

	@SearchParameter
	private String name;
	private LocalDateTime createdAt;

	public StandardDto(Standard entity) {
		this.id = entity.getId().toString();
		this.name = entity.getName();
		this.createdAt = entity.getCreatedDate();
	}
}
