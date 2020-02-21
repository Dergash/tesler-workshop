package io.chronos.dto;

import io.chronos.dictionaries.Dictionaries;
import io.chronos.dictionaries.DictionaryType;
import io.chronos.dictionaries.WorkshopLov;
import io.chronos.entity.Standard;
import io.tesler.api.data.dto.DataResponseDTO;
import io.tesler.core.util.filter.SearchParameter;
import io.tesler.core.util.filter.SearchParameterType;
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

	@SearchParameter(type = SearchParameterType.LOV)
	@WorkshopLov(DictionaryType.STANDARD_STATUS)
	private String statusCd;

	private String statusColor;

	public StandardDto(Standard entity) {
		this.id = entity.getId().toString();
		this.name = entity.getName();
		this.createdAt = entity.getCreatedDate();
		this.statusCd = DictionaryType.STANDARD_STATUS.lookupValue(entity.getStatusCd());
		if (entity.getStatusCd() != null && entity.getStatusCd().getKey() != null) {
			if (Dictionaries.StandardStatus.REJECTED.getKey().equals(entity.getStatusCd().getKey())) {
				this.statusColor = "#FF0000";
			}
		}
	}
}
