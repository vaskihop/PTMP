package lt.vtmc.projectTaskManagement.model;

import com.opencsv.bean.CsvBindByName;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.vtmc.projectTaskManagement.enums.State;

@Getter @Setter @NoArgsConstructor
public class Project {
	@CsvBindByName
	private Long id;
	@CsvBindByName
	private String projectTitle;
	@CsvBindByName
	private String projectDescription;
	@CsvBindByName
	private boolean projectState; 
	@CsvBindByName
	private int generalTaskNumber;
	@CsvBindByName
	private int unfinishedTaskNumber;
	
	public Project(Long id, String projectTitle, String projectDescription, boolean projectState, int generalTaskNumber,
			int unfinishedTaskNumber) {
		this.id = id;
		this.projectTitle = projectTitle;
		this.projectDescription = projectDescription;
		this.projectState = projectState;
		this.generalTaskNumber = generalTaskNumber;
		this.unfinishedTaskNumber = unfinishedTaskNumber;
	}
	public Project(ProjectEntity project) {
		this.id = project.getId();
		this.projectTitle = project.getProjectTitle();
		this.projectDescription = project.getProjectDescription();
		this.generalTaskNumber=project.getTaskList().size();
		this.unfinishedTaskNumber=(int)project.getTaskList().stream().filter(task->!(task.getTaskState().equals(State.DONE))).count();
		this.projectState=unfinishedTaskNumber==0;
	}
	
	

	
	
	
}
