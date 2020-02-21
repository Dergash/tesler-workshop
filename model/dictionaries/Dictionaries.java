package io.chronos.dictionaries;

import io.tesler.api.data.dictionary.LOV;
import lombok.experimental.UtilityClass;

@UtilityClass
public class Dictionaries {

	@UtilityClass
	public static class StandardStatus {
		public static final LOV NEW = new LOV("New");
		public static final LOV ON_REVIEW = new LOV("On review");
		public static final LOV REJECTED = new LOV("Rejected");
		public static final LOV APPROVED = new LOV("Approved");
	}
}
