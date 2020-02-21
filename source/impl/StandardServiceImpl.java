package io.chronos.crudma.impl;

import io.chronos.crudma.StandardService;
import io.chronos.crudma.meta.StandardServiceFieldMetaBuilder;
import io.chronos.dictionaries.Dictionaries;
import io.chronos.dictionaries.DictionaryType;
import io.chronos.dto.StandardDto;
import io.chronos.entity.Standard;
import io.tesler.core.crudma.bc.BusinessComponent;
import io.tesler.core.crudma.impl.VersionAwareResponseService;
import io.tesler.core.dto.rowmeta.ActionResultDTO;
import io.tesler.core.dto.rowmeta.CreateResult;
import io.tesler.core.service.action.Actions;
import org.springframework.stereotype.Service;

@Service
public class StandardServiceImpl extends VersionAwareResponseService<StandardDto, Standard>
		implements StandardService {

	public StandardServiceImpl() {
		super(StandardDto.class, Standard.class, null, StandardServiceFieldMetaBuilder.class);
	}

	@Override
	protected CreateResult<StandardDto> doCreateEntity(Standard standard, BusinessComponent businessComponent) {
		standard.setName("New standard");
		standard.setStatusCd(Dictionaries.StandardStatus.NEW);
		baseDAO.save(standard);
		return new CreateResult<>(entityToDto(businessComponent, standard));
	}

	@Override
	protected ActionResultDTO<StandardDto> doUpdateEntity(Standard standard, StandardDto standardDto, BusinessComponent businessComponent) {
		standard.setName(standardDto.getName());
		standard.setStatusCd(DictionaryType.STANDARD_STATUS.lookupName(standardDto.getStatusCd()));
		return new ActionResultDTO<>(entityToDto(businessComponent, standard));
	}

	@Override
	public Actions<StandardDto> getActions() {
		return Actions.<StandardDto>builder()
				.create().add()
				.save().add()
				.delete().add()
				.build();
	}

	@Override
	public boolean isDeferredCreationSupported(BusinessComponent bc) {
		return false;
	}
}
