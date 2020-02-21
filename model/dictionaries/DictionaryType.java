package io.chronos.dictionaries;

import io.tesler.api.data.dictionary.IDictionaryType;
import io.tesler.api.data.dictionary.LOV;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.io.Serializable;

import static io.tesler.api.data.dictionary.DictionaryCache.dictionary;

@Getter
@RequiredArgsConstructor
public enum DictionaryType implements Serializable, IDictionaryType {
	STANDARD_STATUS;

	@Override
	public String getName() {
		return super.name();
	}

	@Override
	public LOV lookupName(String s) {
		return dictionary().lookupName(s, this);
	}

	@Override
	public String lookupValue(LOV lov) {
		return dictionary().lookupValue(lov, this);
	}
}
