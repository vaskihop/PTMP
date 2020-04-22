package lt.vtmc.projectTaskManagement.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class Task {
	
	private String taskTitle;
	private String taskDescription;
	private String taskPriority;
	private String taskState;
	public Task(String taskTitle, String taskDescription, String taskPriority, String taskState) {

		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskState = taskState;
	}
	
	
}
