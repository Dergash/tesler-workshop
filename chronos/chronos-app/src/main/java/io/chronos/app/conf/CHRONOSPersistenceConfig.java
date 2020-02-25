package io.chronos.app.conf;

import io.tesler.model.core.config.PersistenceJPAConfig;
import java.util.ArrayList;
import java.util.List;


public class CHRONOSPersistenceConfig extends PersistenceJPAConfig {

	@Override
	protected List<String> getPackagesToScan() {
		List<String> result = new ArrayList<>(super.getPackagesToScan());
		result.add("io.chronos");
		return result;
	}

}
