

package io.chronos.crudma.impl;

import dto.StandardDTO;
import io.chronos.crudma.StandardService;
import io.chronos.entity.Standard;
import io.tesler.core.crudma.bc.BusinessComponent;
import io.tesler.core.crudma.impl.VersionAwareResponseService;
import io.tesler.core.dto.rowmeta.ActionResultDTO;
import io.tesler.core.dto.rowmeta.CreateResult;
import org.springframework.stereotype.Service;

@Service
public class StandardServiceImpl extends VersionAwareResponseService<StandardDTO, Standard> implements StandardService {

	public StandardServiceImpl() {
		super(StandardDTO.class, Standard.class, null, null);
	}

	@Override
	protected CreateResult<StandardDTO> doCreateEntity(Standard standard, BusinessComponent businessComponent) {
		return null;
	}

	@Override
	protected ActionResultDTO<StandardDTO> doUpdateEntity(Standard standard, StandardDTO standardDTO, BusinessComponent businessComponent) {
		return null;
	}
}
