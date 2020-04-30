package lt.vtmc.projectTaskManagement.model;



import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

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
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval=true)
	@JsonIgnoreProperties("project")
	private List<TaskEntity> taskList=new ArrayList<TaskEntity>();

	public ProjectEntity(String projectTitle, String projectDescription) {

		this.projectTitle = projectTitle;
		this.projectDescription = projectDescription;
	}
	
	public ProjectEntity(Project project) {
		this.projectTitle = project.getProjectTitle();
		this.projectDescription = project.getProjectDescription();
	}
	
	public void updateProject(Project project) {
		this.projectTitle = project.getProjectTitle();
		this.projectDescription = project.getProjectDescription();
	}

}
