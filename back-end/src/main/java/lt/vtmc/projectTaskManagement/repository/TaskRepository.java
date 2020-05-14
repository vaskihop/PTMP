package lt.vtmc.projectTaskManagement.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.model.TaskEntity;

public interface TaskRepository extends PagingAndSortingRepository<TaskEntity, Long> {
	List<TaskEntity> findAllByProject(ProjectEntity project, Pageable pageable);
	List<TaskEntity> findAllTaskEntityByProjectAndIdOrProjectAndTaskTitleContainsIgnoreCase(ProjectEntity project, Long id, ProjectEntity project1, String title, Pageable pageable);
	
}
