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
import lt.vtmc.projectTaskManagement.enums.State;


@Entity
@Getter @Setter @NoArgsConstructor
public class ProjectEntity {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String projectTitle;
	private String projectDescription;
	private boolean projectState; //true-uzbaigtas; 
	private int generalTaskNumber;
	private int unfinishedTaskNumber;
	
	@OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval=true)
	@JsonIgnoreProperties("project")
	private List<TaskEntity> taskList=new ArrayList<TaskEntity>();
	
	public ProjectEntity(String projectTitle, String projectDescription) {
//		galbut reiketu netraukti state i konstruktoriu, o automatiskai ji daryt false
		this.projectTitle = projectTitle;
		this.projectDescription = projectDescription;
	}
	
	public void setGeneralTaskNumber() {
		this.generalTaskNumber=taskList.size();
	}
	
	public void setUnfinishedTaskNumber() {
		this.unfinishedTaskNumber=(int)taskList.stream().filter(task->!(task.getTaskState().equals(State.DONE))).count();
	}
	
	public void setProjectState() {
		if(unfinishedTaskNumber==0) {
			projectState=true;
		}else {
			projectState=false;
		}
	}

}
