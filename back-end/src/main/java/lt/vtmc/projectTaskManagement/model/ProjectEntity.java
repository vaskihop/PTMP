package lt.vtmc.projectTaskManagement.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter @Setter @NoArgsConstructor
public class ProjectEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String projectTitle;
	private String projectDescription;
	private boolean projectState; //true-uzbaigtas; paskui bus enum
	private int generalTaskQuantity;
	private int inProgressTaskQuantity;
	
	public ProjectEntity(String projectTitle, String projectDescription, boolean projectState,
			int generalTaskQuantity, int inProgressTaskQuantity) {
//		galbut reiketu netraukti state i konstruktoriu, o automatiskai ji daryt false
		this.projectTitle = projectTitle;
		this.projectDescription = projectDescription;
		this.projectState = projectState;
		this.generalTaskQuantity = generalTaskQuantity;
		this.inProgressTaskQuantity = inProgressTaskQuantity;
	}
	
	

}
