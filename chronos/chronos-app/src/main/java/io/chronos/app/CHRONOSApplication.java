package io.chronos.app;

import io.chronos.app.conf.CHRONOSApplicationConfig;
import io.chronos.app.conf.CHRONOSRedirectConfig;
import io.chronos.app.conf.CHRONOSSecurityConfig;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class CHRONOSApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		new SpringApplicationBuilder()
				.sources(
						CHRONOSApplicationConfig.class,
						CHRONOSRedirectConfig.class,
						CHRONOSSecurityConfig.class
				).build().run(args);
	}

}
