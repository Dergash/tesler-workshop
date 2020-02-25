package io.chronos.app.conf;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "chronosapp")
public class CHRONOSConfiguration {

	public static final String UI_PATH = "chronosapp.ui-path";

	private String uiPath;

}
