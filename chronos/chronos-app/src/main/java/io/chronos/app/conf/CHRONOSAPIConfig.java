package io.chronos.app.conf;

import io.tesler.core.config.APIConfig;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Import(APIConfig.class)
@ComponentScan({"io.chronos.controller"})
public class CHRONOSAPIConfig extends WebMvcConfigurerAdapter {

}
