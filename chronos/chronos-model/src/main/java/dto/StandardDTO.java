package dto;

import io.chronos.entity.Standard;
import io.tesler.api.data.dto.DataResponseDTO;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class StandardDTO extends DataResponseDTO {
	private String name;
	private LocalDateTime createdAt;

	public StandardDTO(Standard entity) {
		this.name = entity.getName();
		this.createdAt = entity.getCreatedDate();
	}
}
