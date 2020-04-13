package lt.vtmc.projectTaskManagement.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class Project {
	private String projectTitle;
	private String projectDescription;
	private Boolean projectState; //true-uzbaigtas; paskui bus enum; kol kas konstruktoriuje nera
	private int generalTaskQuantity;
	private int inProgressTaskQuantity;
	public Project(String projectTitle, String projectDescription, boolean projectState, int generalTaskQuantity,
			int inProgressTaskQuantity) {
		super();
		this.projectTitle = projectTitle;
		this.projectDescription = projectDescription;
		this.projectState=projectState;
		this.generalTaskQuantity = generalTaskQuantity;
		this.inProgressTaskQuantity = inProgressTaskQuantity;
	}
	
	
}
