package io.chronos.crudma.meta;

import static io.chronos.dto.StandardDto_.name;

import io.chronos.dto.StandardDto;
import io.tesler.core.crudma.bc.impl.InnerBcDescription;
import io.tesler.core.dto.rowmeta.FieldsMeta;
import io.tesler.core.dto.rowmeta.RowDependentFieldsMeta;
import io.tesler.core.service.rowmeta.FieldMetaBuilder;
import org.springframework.stereotype.Service;

@Service
public class StandardServiceFieldMetaBuilder extends FieldMetaBuilder<StandardDto> {
	@Override
	public void buildRowDependentMeta(RowDependentFieldsMeta<StandardDto> rowDependentFieldsMeta, InnerBcDescription innerBcDescription, Long aLong, Long aLong1) {

	}

	@Override
	public void buildIndependentMeta(FieldsMeta<StandardDto> fieldsMeta, InnerBcDescription innerBcDescription, Long aLong) {
		fieldsMeta.enableFilter(name);
		fieldsMeta.setEnabled(name);
	}
}
