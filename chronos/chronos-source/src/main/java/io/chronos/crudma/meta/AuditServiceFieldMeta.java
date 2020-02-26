package io.chronos.crudma.meta;

import dto.AuditDto;
import dto.AuditDto_;
import io.tesler.core.crudma.bc.impl.InnerBcDescription;
import io.tesler.core.dto.rowmeta.FieldsMeta;
import io.tesler.core.dto.rowmeta.RowDependentFieldsMeta;
import io.tesler.core.service.rowmeta.FieldMetaBuilder;
import org.springframework.stereotype.Service;

@Service
public class AuditServiceFieldMeta extends FieldMetaBuilder<AuditDto> {
    @Override
    public void buildRowDependentMeta(RowDependentFieldsMeta<AuditDto> rowDependentFieldsMeta, InnerBcDescription innerBcDescription, Long aLong, Long aLong1) {

    }

    // for all records
    @Override
    public void buildIndependentMeta(FieldsMeta<AuditDto> fieldsMeta, InnerBcDescription innerBcDescription, Long aLong) {
            fieldsMeta.enableFilter(AuditDto_.audit_no,AuditDto_.status); // enable search
            fieldsMeta.setEnabled(AuditDto_.audit_no,AuditDto_.audit_type); // enable editing
    }
}
