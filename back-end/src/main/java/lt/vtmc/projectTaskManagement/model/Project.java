package lt.vtmc.projectTaskManagement.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class Project {
	private String projectTitle;
	private String projectDescription;

	public Project(String projectTitle, String projectDescription) {
		super();
		this.projectTitle = projectTitle;
		this.projectDescription = projectDescription;

	}
	
	
}
