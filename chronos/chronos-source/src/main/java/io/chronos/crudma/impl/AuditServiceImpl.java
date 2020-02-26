package io.chronos.crudma.impl;

import dto.AuditDto;
import io.chronos.crudma.AuditService;
import io.chronos.crudma.meta.AuditServiceFieldMeta;
import io.chronos.entity.Audit;
import io.tesler.core.crudma.bc.BusinessComponent;
import io.tesler.core.crudma.impl.VersionAwareResponseService;
import io.tesler.core.dto.rowmeta.ActionResultDTO;
import io.tesler.core.dto.rowmeta.CreateResult;
import io.tesler.core.service.action.Actions;
import io.tesler.core.service.rowmeta.FieldMetaBuilder;
import io.tesler.model.core.entity.BaseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.metamodel.SingularAttribute;

@Service
public class AuditServiceImpl extends VersionAwareResponseService<AuditDto, Audit> implements AuditService {

    public AuditServiceImpl() {
        super(AuditDto.class,Audit.class,null, AuditServiceFieldMeta.class);
    }

    @Override
    protected CreateResult<AuditDto> doCreateEntity(Audit audit, BusinessComponent businessComponent) {
       baseDAO.save(audit);
       return new CreateResult<>(entityToDto(businessComponent,audit));
    }

    @Override
    protected ActionResultDTO<AuditDto> doUpdateEntity(Audit audit, AuditDto auditDto, BusinessComponent businessComponent) {
        audit.setAudit_no(auditDto.getAudit_no());
        audit.setStatus(auditDto.getAudit_type());
        audit.setAudit_type(auditDto.getAudit_type());
        return new ActionResultDTO<>(entityToDto(businessComponent,audit));
    }

    @Override
    public Actions<AuditDto> getActions() {
        return Actions.<AuditDto>builder().create().add().save().add().delete().add().build();
    }

    @Override
    public boolean isDeferredCreationSupported(BusinessComponent bc) {
        return false;
    }
}
