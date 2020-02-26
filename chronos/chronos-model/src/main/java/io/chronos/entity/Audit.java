package io.chronos.entity;

import io.tesler.model.core.entity.BaseEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@NoArgsConstructor
public class Audit extends BaseEntity {

	@Column(name = "audit_no")
	private String audit_no;
	private String status;
	@Column(name = "audit_type")
	private String audit_type;

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
