package dto;

import io.chronos.entity.Audit;
import io.tesler.api.data.dto.DataResponseDTO;
import io.tesler.core.util.filter.SearchParameter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
public class AuditDto extends DataResponseDTO {

	private String internalId;
	@SearchParameter
	private String audit_no;
	@SearchParameter
	private String status;
	private String audit_type;


	public AuditDto(Audit audit) {
		this.id=audit.getId().toString();
		this.internalId=audit.getId().toString();
		this.audit_no=audit.getAudit_no();
		this.audit_type=audit.getAudit_type();
		this.status=audit.getStatus();

	}

	public String getInternalId() {
		return internalId;
	}

	public void setInternalId(String internalId) {
		this.internalId = internalId;
	}

	public String getAudit_no() {
		return audit_no;
	}

	public void setAudit_no(String audit_no) {
		this.audit_no = audit_no;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAudit_type() {
		return audit_type;
	}

	public void setAudit_type(String audit_type) {
		this.audit_type = audit_type;
	}
}
