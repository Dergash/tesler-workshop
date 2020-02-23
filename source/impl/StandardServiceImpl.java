package io.chronos.crudma.impl;

import io.chronos.crudma.StandardService;
import io.chronos.dto.StandardDto;
import io.chronos.entity.Standard;
import io.tesler.core.crudma.bc.BusinessComponent;
import io.tesler.core.crudma.impl.VersionAwareResponseService;
import io.tesler.core.dto.rowmeta.ActionResultDTO;
import io.tesler.core.dto.rowmeta.CreateResult;
import org.springframework.stereotype.Service;

@Service
public class StandardServiceImpl extends VersionAwareResponseService<StandardDto, Standard>
		implements StandardService {

	public StandardServiceImpl() {
		super(StandardDto.class, Standard.class, null, null);
	}

	@Override
	protected CreateResult<StandardDto> doCreateEntity(Standard standard, BusinessComponent businessComponent) {
		return null;
	}

	@Override
	protected ActionResultDTO<StandardDto> doUpdateEntity(Standard standard, StandardDto standardDto, BusinessComponent businessComponent) {
		return null;
	}
}
