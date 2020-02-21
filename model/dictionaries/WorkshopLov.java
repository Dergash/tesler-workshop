package io.chronos.dictionaries;

import io.tesler.api.data.dictionary.BaseLov;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@BaseLov(type = DictionaryType.class)
public @interface WorkshopLov {
	DictionaryType value();
}
