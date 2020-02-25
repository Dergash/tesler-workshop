package io.chronos.crudma.config;

import io.chronos.crudma.StandardService;
import io.tesler.core.crudma.bc.BcIdentifier;
import io.tesler.core.crudma.bc.EnumBcIdentifier;
import io.tesler.core.crudma.bc.impl.AbstractEnumBcSupplier;
import io.tesler.core.crudma.bc.impl.BcDescription;
import lombok.Getter;
import org.springframework.stereotype.Component;

@Getter
public enum CHRONOSServiceAssociation implements EnumBcIdentifier {

	// @formatter:off
		bcStandard(StandardService.class)
	;

	// @formatter:on

	public static final EnumBcIdentifier.Holder<CHRONOSServiceAssociation> Holder = new Holder<>(CHRONOSServiceAssociation.class);

	private final BcDescription bcDescription;

	CHRONOSServiceAssociation(String parentName, Class<?> serviceClass, boolean refresh) {
		this.bcDescription = buildDescription(parentName, serviceClass, refresh);
	}

	CHRONOSServiceAssociation(String parentName, Class<?> serviceClass) {
		this(parentName, serviceClass, false);
	}

	CHRONOSServiceAssociation(BcIdentifier parent, Class<?> serviceClass, boolean refresh) {
		this(parent == null ? null : parent.getName(), serviceClass, refresh);
	}

	CHRONOSServiceAssociation(BcIdentifier parent, Class<?> serviceClass) {
		this(parent, serviceClass, false);
	}

	CHRONOSServiceAssociation(Class<?> serviceClass, boolean refresh) {
		this((String) null, serviceClass, refresh);
	}

	CHRONOSServiceAssociation(Class<?> serviceClass) {
		this((String) null, serviceClass, false);
	}

	@Component
	public static class CHRONOSBcSupplier extends AbstractEnumBcSupplier<CHRONOSServiceAssociation> {

		public CHRONOSBcSupplier() {
			super(CHRONOSServiceAssociation.Holder);
		}

	}

}
